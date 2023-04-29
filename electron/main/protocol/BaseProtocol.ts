export default class BaseProtocol {
    public buffer: Buffer;
    // 卡号
    public uid: string;
    // uid 校验位
    public uidCheckBit: number;
    // 厂商数据
    protected factoryData: Buffer;

    constructor(buffer: Buffer) {
        this.buffer = buffer;
    }
}
