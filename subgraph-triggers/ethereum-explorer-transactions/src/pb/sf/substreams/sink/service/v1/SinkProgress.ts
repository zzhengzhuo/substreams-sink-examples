// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0

import { Writer, Reader } from "as-proto/assembly";

export class SinkProgress {
  static encode(message: SinkProgress, writer: Writer): void {
    writer.uint32(8);
    writer.uint64(message.lastProcessedBlock);
  }

  static decode(reader: Reader, length: i32): SinkProgress {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new SinkProgress();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lastProcessedBlock = reader.uint64();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  lastProcessedBlock: u64;

  constructor(lastProcessedBlock: u64 = 0) {
    this.lastProcessedBlock = lastProcessedBlock;
  }
}
