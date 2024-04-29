// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0

import { Writer, Reader } from "as-proto/assembly";

export class BlockRef {
  static encode(message: BlockRef, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.id);

    writer.uint32(16);
    writer.uint64(message.number);
  }

  static decode(reader: Reader, length: i32): BlockRef {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new BlockRef();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;

        case 2:
          message.number = reader.uint64();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  id: string;
  number: u64;

  constructor(id: string = "", number: u64 = 0) {
    this.id = id;
    this.number = number;
  }
}
