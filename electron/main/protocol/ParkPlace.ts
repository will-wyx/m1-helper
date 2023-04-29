import BaseProtocol from "./BaseProtocol";

export default class ParkPlace extends BaseProtocol {
    // 楼层号（从右向左逐位表示，最右侧为 1 层）
    private floor: bigint;
    // 到期时间
    private expireTime: Buffer;
    // 电梯号 1
    private elevator1: number;
    // 滚码 1
    private rollCode1: number;
    // 校验 1
    private rollCodeCheck1: number;

    // 电梯号 2
    private elevator2: number;
    // 滚码 2
    private rollCode2: number;
    // 校验 2
    private rollCodeCheck2: number;

    // KeyA
    private keyA: string;
    // 存取控制
    private storageControl: string;
    // KeyB
    private keyB: string;

    constructor(buffer: Buffer) {
        super(buffer);
        this.decode();
    }

    decode() {
        let index = 0;
        // 读取 4 位卡号
        let buffer = this.buffer.slice(index, index + 4)
        index += 4;
        this.uid = buffer.toString('hex');
        // 读取 1 位卡号检验位
        this.uidCheckBit = this.buffer.readUInt8(index);
        index += 1;
        // 读取其他厂商数据
        this.factoryData = this.buffer.slice(index, index + 11);
        index += 11;
        // 路过 7 扇区之前的数据
        // 每个扇区有 4 个区块，每个区块有 16 个字节
        index = 7 * 4 * 16;
        // 接下来的 8 个字节好像是用户信息
        buffer = this.buffer.slice(index, index + 8);
        index += 8;
        // 接下来的 8 个字节是楼层号
        this.floor = this.buffer.readBigUInt64BE(index);
        index += 8;
        // 接下来 2 个字节不知道是什么
        index += 2;
        // 接下来 9 个字节是到期时间
        this.expireTime = this.buffer.slice(index, index + 9);
        index += 9;
        // 接下来 5 个又不知道是什么了
        index += 5;

        // 下边 1 个字节是电梯号 1
        this.elevator1 = this.buffer.readUInt8(index);
        index += 1;
        // 下边 1 个字节好像跟电梯号有关
        index += 1;
        // 下边 2 个字节滚码 1
        this.rollCode1 = this.buffer.readUInt16BE(index);
        index += 2;
        // 下边是校验 1
        this.rollCodeCheck1 = this.buffer.readUInt8(index);
        index += 1;

        // 下边 1 个字节是电梯号 2
        this.elevator2 = this.buffer.readUInt8(index);
        index += 1;
        // 下边 1 个字节好像跟电梯号有关
        index += 1;
        // 下边 2 个字节滚码2
        this.rollCode2 = this.buffer.readUInt16BE(index);
        index += 2;
        // 下边是校验 2
        this.rollCodeCheck2 = this.buffer.readUInt8(index);
        index += 1;
        // 下边 6 个不知道
        index += 6;
        // 接下来是控制块
        // 有 6 个字节是 Key A
        buffer = this.buffer.slice(index, index + 6);
        index += 6;
        this.keyA = buffer.toString('hex');
        // 有 4 个字节是存取控制
        buffer = this.buffer.slice(index, index + 4);
        index += 4;
        this.storageControl = buffer.toString('hex');
        // 有 6 个字节是 Key B
        buffer = this.buffer.slice(index, index + 6);
        index += 6;
        this.keyB = buffer.toString('hex');
    }
}