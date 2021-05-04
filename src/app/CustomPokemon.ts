export class CustomPokemon{

    name: string;
    number: number;
    types: string[];
    regions: string[];

    constructor(json:any) {
        this.regions = json.inRegions;
        this.name = json.name;
        this.number = json.number;
        this.types = json.types;
    }

    GetColor() {   
        let temp = "";

        for(let i = 0; i < this.types.length; i++){
            temp += this.types[i] + "-";
        }
        temp = temp.slice(0,-1);
        return temp;
    }
}