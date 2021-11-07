abstract class AbstractPerson {
    protected _name: string = "Mark";

    abstract setName(name: string): void;
}

// new AbstractPerson();
class AbPerson extends AbstractPerson {
    setName(name: string): void {
        this._name = name;
    }
}

const ppp = new AbPerson();
ppp.setName("local");
