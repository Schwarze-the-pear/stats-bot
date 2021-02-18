const fs = require("fs");//BUNA ELLEME
//BUNA ELLEME
class Database {//BUNA ELLEME
    constructor(location = "Database", name = "All"){//BUNA ELLEME
        if(location == "Database" && !fs.existsSync(`${__dirname}/Database`))//BUNA ELLEME
        {//BUNA ELLEME
            fs.mkdirSync(`${__dirname}/Database`, {recursive: true});//BUNA ELLEME
        }//BUNA ELLEME
        else if(!fs.existsSync(`${location}`))//BUNA ELLEME
            {fs.mkdirSync(`${__dirname}/${location}`, {recursive: true});}//BUNA ELLEME
        let filePath = `${__dirname}/${location}/${name}.json`;//BUNA ELLEME
        if(!fs.existsSync(filePath))//BUNA ELLEME
            fs.closeSync(fs.openSync(filePath, 'w'));//BUNA ELLEME
        this.FilePath = filePath;//BUNA ELLEME
        this.Location = location;//BUNA ELLEME
    }//BUNA ELLEME
    add(path, value){//BUNA ELLEME
        let data = this.get(path);//BUNA ELLEME
        if(typeof data == "number") data += Number(value);//BUNA ELLEME
        else data = Number(value);//BUNA ELLEME
        return this.set(path, data);//BUNA ELLEME
    }//BUNA ELLEME
    get(path){//BUNA ELLEME
        let data = this.read(), result = undefined;//BUNA ELLEME
        if(!data) data = {};//BUNA ELLEME
        result = _get(path, data);//BUNA ELLEME
        return result ? result : undefined;//BUNA ELLEME
    }//BUNA ELLEME
    set(path, value){//BUNA ELLEME
        let data = this.read();//BUNA ELLEME
        if(!data) data = {};//BUNA ELLEME
        data = _set(path, value, data);//BUNA ELLEME
        fs.truncateSync(this.FilePath);//BUNA ELLEME
        fs.writeFileSync(this.FilePath, JSON.stringify(data), {encoding: "utf-8"});//BUNA ELLEME
        return data;//BUNA ELLEME
    }//BUNA ELLEME
    read(){//BUNA ELLEME
        let data = fs.readFileSync(this.FilePath, {encoding: "utf-8"});//BUNA ELLEME
        if(!data || (data && data == null)) return {};//BUNA ELLEME
        let obj = JSON.parse(data);//BUNA ELLEME
        return obj;//BUNA ELLEME
    }//BUNA ELLEME
}//BUNA ELLEME
//BUNA ELLEME
function _set(path, value, obj = undefined){//BUNA ELLEME
    if(obj == undefined) return undefined;//BUNA ELLEME
    let locations = path.split("."), output = {};//BUNA ELLEME
    output = obj;//BUNA ELLEME
    let ref = output;//BUNA ELLEME
    for (let index = 0; index < locations.length - 1; index++) {//BUNA ELLEME
        if(!ref[locations[index]])//BUNA ELLEME
            ref = ref[locations[index]] = {};//BUNA ELLEME
        else//BUNA ELLEME
            ref = ref[locations[index]];//BUNA ELLEME
    }//BUNA ELLEME
    ref[locations[locations.length - 1]] = value;//BUNA ELLEME
    return output;//BUNA ELLEME
}//BUNA ELLEME
//BUNA ELLEME
function _get(path, obj = {}){//BUNA ELLEME
    let locations = path.split("."), ref = obj;//BUNA ELLEME
    for (let index = 0; index < locations.length - 1; index++) {//BUNA ELLEME
        ref = ref[locations[index]] ? ref[locations[index]] : undefined;//BUNA ELLEME
        if(!ref) return undefined;//BUNA ELLEME
    }//BUNA ELLEME
    let output = ref[locations[locations.length - 1]];//BUNA ELLEME
    return output;//BUNA ELLEME
}//BUNA ELLEME
//BUNA ELLEME
module.exports = Database;//BUNA ELLEME
//BUNA ELLEME