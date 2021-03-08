export default class Tag {
    set groupCode(value: number) {
        this._groupCode = value;
    }
    get nullable(): boolean {
        return this._nullable;
    }
    set nullable(value: boolean) {
        this._nullable = value;
    }
    get version(): string {
        return this._version;
    }
    set version(value: string) {
        this._version = value;
    }
    set value(value: number | string) {
        this._value = value;
    }
    get groupCode(): number {
        return this._groupCode;
    }
    get value(): number | string {
        return this._value;
    }
    private _groupCode: number;
    private _nullable: boolean;
    private _value: number | string;
    private _version: string;
    public constructor (
        groupCode: number, value: number | string = '',
        version: string = 'AC1009',
        nullable: boolean = true
    ) {
        this._nullable = nullable;
        this._version = version;
        this._groupCode = groupCode;
        this._value = value;
    }
    public stringify():string {
        if (this.nullable || this.value !== '') {
            // Do not remove the tow spaces in the string 👍
            return `  ${this.groupCode}\n${this.value}\n`;
        }
        return '';
    }
};
