import Tag          from "../../../../Internals/Tag.js";
import DXFManager   from "../../../../Internals/DXFManager.js";
import DXFInterface from "../../../../Internals/Interfaces/DXFInterface.js";

export default class APPID extends DXFManager implements DXFInterface {
    get handleToOwner(): string {
        return this._handleToOwner;
    }

    set handleToOwner(value: string) {
        this._handleToOwner = value;
    }
    get flag(): number {
        return this._flag;
    }
    get appIDName(): string {
        return this._appIDName;
    }
    private readonly _appIDName: string;
    private readonly _flag: number;
    private _handleToOwner: string;
    public constructor(name: string, flag: number) {
        super(DXFManager.version);
        this._appIDName = name;
        this._flag = flag;
        this._handleToOwner = '0';
    }

    tags(): Tag[] {
        let tags: Tag[] = [];
        tags.push(new Tag(0, 'APPID'));
        tags.push(new Tag(5, this.handle));
        tags.push(new Tag(330, this.handleToOwner));
        tags.push(new Tag(100, 'AcDbSymbolTableRecord'));
        tags.push(new Tag(100, 'AcDbRegAppTableRecord'));
        tags.push(new Tag(2, this.appIDName));
        tags.push(new Tag(70, this.flag));
        return tags;
    }

    public stringify(): string {
        return this.tags().reduce((str, tag) => {
            return str += tag.stringify();
        }, '');
    }

};
