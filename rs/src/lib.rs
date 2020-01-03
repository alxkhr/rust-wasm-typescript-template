use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn add1(v: i32) -> i32 {
  v + 1
}
