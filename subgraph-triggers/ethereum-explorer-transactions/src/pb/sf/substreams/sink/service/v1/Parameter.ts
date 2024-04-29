// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0

import { Writer, Reader } from "as-proto/assembly";

export class Parameter {
  static encode(message: Parameter, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.key);

    writer.uint32(18);
    writer.string(message.value);
  }

  static decode(reader: Reader, length: i32): Parameter {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new Parameter();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;

        case 2:
          message.value = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  key: string;
  value: string;

  constructor(key: string = "", value: string = "") {
    this.key = key;
    this.value = value;
  }
}
