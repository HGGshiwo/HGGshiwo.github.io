class emulator{
    constructor(code) {
        this.regs = {
            "x0":0b00000000000000000000000000000,
            "x1":0b00000000000000000000000000000,
            "x2":0b00000000000000000000000000000,
            "x3":0b00000000000000000000000000000,
            "x4":0b00000000000000000000000000000,
            "x5":0b00000000000000000000000000000,
            "x6":0b00000000000000000000000000000,
            "x7":0b00000000000000000000000000000,
            "x8":0b00000000000000000000000000000,
            "x9":0b00000000000000000000000000000,
            "x10":0b00000000000000000000000000000,
            "x11":0b00000000000000000000000000000,
            "x12":0b00000000000000000000000000000,
            "x13":0b00000000000000000000000000000,
            "x14":0b00000000000000000000000000000,
            "x15":0b00000000000000000000000000000,
            "x16":0b00000000000000000000000000000,
            "x17":0b00000000000000000000000000000,
            "x18":0b00000000000000000000000000000,
            "x19":0b00000000000000000000000000000,
            "x20":0b00000000000000000000000000000,
            "x21":0b00000000000000000000000000000,
            "x22":0b00000000000000000000000000000,
            "x23":0b00000000000000000000000000000,
            "x24":0b00000000000000000000000000000,
            "x25":0b00000000000000000000000000000,
            "x26":0b00000000000000000000000000000,
            "x27":0b00000000000000000000000000000,
            "x28":0b00000000000000000000000000000,
            "x29":0b00000000000000000000000000000,
            "x30":0b00000000000000000000000000000,
            "x31":0b00000000000000000000000000000,
        };
        this.dataSegment = {
            "x1":Array(64),
            "x2":Array(64),
            "x3":Array(64),
            "x4":Array(64),
            "x5":Array(64),
            "x6":Array(64),
            "x7":Array(64),
            "x8":Array(64),
            "x9":Array(64),
            "x10":Array(64),
            "x11":Array(64),
            "x12":Array(64),
            "x13":Array(64),
            "x14":Array(64),
            "x15":Array(64),
            "x16":Array(64),
            "x17":Array(64)
        };
        this.pc = 0;
        this.codeSegment = code.split('\n');
    }

    run(){
        var code = this.codeSegment[this.pc];
        code = code.replace(/,/g,'');
        code = code.split(' ');

        if(code[0] == "add"){
            this.regs[code[1]] = (this.regs[code[2]] + this.regs[code[3]]) & 0xffffffff;
        }
              
        else if(code[0] == "addi"){
            var t = (code[3][0] == '-') ? -1*parseInt(code[3].slice(1)) : parseInt(code[3]);
            this.regs[code[1]] = (this.regs[code[2]] + t) & 0xffffffff;
        }
        
        else if(code[0] == "sub"){
            this.regs[code[1]] = (this.regs[code[2]] - this.regs[code[3]]) & 0xffffffff;
        }
            
        else if(code[0] == "sll"){
            this.regs[code[1]] = (this.regs[code[2]] >> this.regs[parseInt(code[3])]) & 0xffffffff;
        }
            
        else if(code[0] == "slli"){
           this.regs[code[1]] = (this.regs[code[2]] >> parseInt(code[3])) & 0xffffffff; 
        }
            
        else if(code[0] == "sd"){
            t = code[2].split('(');
            ea = parseInt(t[0]) >> 3;
            this.dataSegment[t[1].slice(0,- 2)][ea] = this.regs[code[1]];
        }
            
        else if(code[0] == "ld"){
            t = code[2].split('(');
            ea = parseInt(t[0]) >> 3;
            this.regs[code[1]] = this.dataSegment[t[1].slice(0 ,- 1)][ea]; 
        }
               
        else if(code[0] == "jal"){
            if(code[1] == "x1"){
                this.regs["x1"] = this.pc & 0xffffffff;
            }
            this.pc = this.codeSegment.indexOf(code[2]+':');
        }
        
        else if(code[0] == "jalr"){
            this.pc = this.regs["x1"];
        }
        this.pc += 1;
    }
}
