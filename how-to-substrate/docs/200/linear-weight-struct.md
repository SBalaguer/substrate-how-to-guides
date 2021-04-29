---
sidebar_position: 1
---

# Linear Weighting Struct

_Get the simple things down first._

## Goal

Understand how to calculate transaction weights using a custom weighting struct for single transaction values.

## Use cases

Calculate correct weight for a transaction involving a `u32`.

## Overview
This guide goes over the components of a simple weighting struct designed for a single argument dispatch of type `u32`. 
The ultimate weight of the transaction is the product of the transaction parameter and the field of this struct.
Traits:

- [WeighData](<https://substrate.dev/rustdocs/v3.0.0/frame_support/weights/trait.WeighData.html#impl-WeighData%3CT%3E-for-(Weight%2C%20DispatchClass%2C%20Pays)>): weigh the data in a function
- [PaysFee](https://substrate.dev/rustdocs/v3.0.0/frame_support/weights/trait.PaysFee.html): designate whether the dispatch pays a fee or not
- [ClassifyDispatch](https://substrate.dev/rustdocs/v3.0.0/frame_support/weights/trait.ClassifyDispatch.html): a way to tell the runtime about the type of dispatch being made

## Steps

### 1. Write the `WeighData` struct

Write a weighting struct that takes a single `u32` parameter.

```rust
pub struct Linear(u32);

impl WeighData<(&u32,)> for Linear {
	fn weigh_data(&self, (x,): (&u32,)) -> Weight {
		// Use saturation so that an extremely large parameter value
		// Does not cause overflow.
		x.saturating_mul(self.0).into()
	}
}
```

### 2. Classify dispatch calls

Since this implementation of `WeighData` requires a `DispatchClass`, use [`default`](https://substrate.dev/rustdocs/v3.0.0/frame_support/weights/enum.DispatchClass.html) to classify all calls as normal &mdash; as opposed to operational.

```rust
// Implement ClassifyDispatch
impl<T> ClassifyDispatch<T> for Linear {
	fn classify_dispatch(&self, _: T) -> DispatchClass {
		// Classify all calls as Normal (which is the default).
		Default::default()
	}
}
```

### 3. Implement `PaysFee`

Implement the `PaysFee` trait to indicate whether fees should actually be charged from the caller. If not, the weights are still applied toward the block maximums.

```rust
// Implement PaysFee
impl<T> PaysFee<T> for Linear {
	fn pays_fee(&self, _: T) -> Pays {
		Pays::Yes
	}
}
```

## Examples

- Feeless transaction pallet (link to playground).

## Related material

- Calculating weights in storage migrations
- [Transaction Weights](https://substrate.dev/docs/en/knowledgebase/learn-substrate/weight)
- [Transaction Fees](https://substrate.dev/docs/en/knowledgebase/runtime/fees)
- [Transaction fees in Polkadot](https://wiki.polkadot.network/docs/en/learn-transaction-fees)