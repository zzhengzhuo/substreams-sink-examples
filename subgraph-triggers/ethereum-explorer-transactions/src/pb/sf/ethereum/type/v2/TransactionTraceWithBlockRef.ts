// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0

import { Writer, Reader } from "as-proto/assembly";
import { TransactionTrace } from "./TransactionTrace";
import { BlockRef } from "./BlockRef";

export class TransactionTraceWithBlockRef {
  static encode(message: TransactionTraceWithBlockRef, writer: Writer): void {
    const trace = message.trace;
    if (trace !== null) {
      writer.uint32(10);
      writer.fork();
      TransactionTrace.encode(trace, writer);
      writer.ldelim();
    }

    const blockRef = message.blockRef;
    if (blockRef !== null) {
      writer.uint32(18);
      writer.fork();
      BlockRef.encode(blockRef, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): TransactionTraceWithBlockRef {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new TransactionTraceWithBlockRef();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.trace = TransactionTrace.decode(reader, reader.uint32());
          break;

        case 2:
          message.blockRef = BlockRef.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  trace: TransactionTrace | null;
  blockRef: BlockRef | null;

  constructor(
    trace: TransactionTrace | null = null,
    blockRef: BlockRef | null = null
  ) {
    this.trace = trace;
    this.blockRef = blockRef;
  }
}
