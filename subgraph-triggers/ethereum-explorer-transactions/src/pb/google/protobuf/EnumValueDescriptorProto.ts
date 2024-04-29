// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0

import { Writer, Reader } from "as-proto/assembly";
import { EnumValueOptions } from "./EnumValueOptions";

export class EnumValueDescriptorProto {
  static encode(message: EnumValueDescriptorProto, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.name);

    writer.uint32(16);
    writer.int32(message.number);

    const options = message.options;
    if (options !== null) {
      writer.uint32(26);
      writer.fork();
      EnumValueOptions.encode(options, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): EnumValueDescriptorProto {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new EnumValueDescriptorProto();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;

        case 2:
          message.number = reader.int32();
          break;

        case 3:
          message.options = EnumValueOptions.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  name: string;
  number: i32;
  options: EnumValueOptions | null;

  constructor(
    name: string = "",
    number: i32 = 0,
    options: EnumValueOptions | null = null
  ) {
    this.name = name;
    this.number = number;
    this.options = options;
  }
}
