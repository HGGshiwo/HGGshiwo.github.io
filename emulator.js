class emulator{
    constructor(code) {
        this.regs = {
             "x0":0, "x1":0, "x2":0x108, "x3":0,
             "x4":0, "x5":0, "x6":0, "x7":0,
             "x8":0, "x9":0,"x10":0,"x11":0,
            "x12":0,"x13":0,"x14":0,"x15":0,
            "x16":0,"x17":0,"x18":0,"x19":0,
            "x20":0,"x21":0,"x22":0,"x23":0,
            "x24":0,"x25":0,"x26":0,"x27":0,
            "x28":0,"x29":0,"x30":0,"x31":0,
        };
        this.dataSegment = {};
        this.stackSegment=new Array(512);
        this.pc = 0;
        this.codeSegment = code.split('\n');
        this.lable={};
        
        for(var i = 0; i < this.codeSegment.length; i++){
            var code = this.codeSegment[i].replace(/^(\s|\xA0)+|(\s|\xA0)+$/g, '');
            var index = code.indexOf('//');
            if(index != -1) code = code.slice(0, index);
            code = code.replace(/,/g,'');
            code = code.split(' ');
            if(code.length == 1){
                code[0] = code[0].slice(0,-1);
                this.lable[code[0]] = i;
            }
            this.codeSegment[i] = code;
        }
    }

    run(){
        console.log(this.codeSegment[this.pc]);
        var code = this.codeSegment[this.pc];
        
        for(var i = 1; i<=2; i++){
            if(code[i] == "sp") code[i] = "x2";
            if(code[i] == "a0") code[i] = "x10";
            if(code[i] == "a1") code[i] = "x11";
            if(code[i] == "a2") code[i] = "x12";
        } 
        if(code.length == 1);

        else if(code[0] == "add"){
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

        else if(code[0] == "and"){
            this.regs[code[1]] = (this.regs[code[2]] & this.regs[code[3]]) & 0xffffffff;
        }

        else if(code[0] == "andi"){
            this.regs[code[1]] = (this.regs[code[2]] & parseInt(code[3])) & 0xffffffff;
        }

        else if(code[0] == "bge"){  
            if(parseInt(this.regs[code[1]]) >= parseInt(this.regs[code[2]])){
                this.pc = parseInt(this.lable[code[3]]);
            }
        }

        else if(code[0] == "beq"){  
            if(parseInt(this.regs[code[1]]) == parseInt(this.regs[code[2]])){
                this.pc = parseInt(this.lable[code[3]]);
            }
        }

        else if(code[0] == "bne"){  
            if(parseInt(this.regs[code[1]]) != parseInt(this.regs[code[2]])){
                this.pc = parseInt(this.lable[code[3]]);
            }
        }

        else if(code[0] == "slr"){
            this.regs[code[1]] = (this.regs[code[2]] << this.regs[parseInt(code[3])]) & 0xffffffff;
        }

        else if(code[0] == "slri"){
            this.regs[code[1]] = (this.regs[code[2]] << parseInt(code[3])) & 0xffffffff;
        }

        else if(code[0] == "xor"){
            this.regs[code[1]] = (this.regs[code[2]] ^ this.regs[parseInt(code[3])]) & 0xffffffff;
        }
        
        else if(code[0] == "xori"){
            this.regs[code[1]] = (this.regs[code[2]] ^ parseInt(code[3])) & 0xffffffff;
        }
            
        else if(code[0] == "sd"){
            t = code[2].split('(');
            t[1] = t[1].slice(0,-2);
            t[0] = parseInt(t[0]);
            var a = this.regs[t[1]] + t[0];//地址
            var v = this.regs[code[1]];//需要存放的值
            for(var i = 0; i < 8; i++){
                this.stackSegment[a - i] = (v & (0xff << (28 - 4 * i))) >> (28 - 4 * i);
            }    
        }
            
        else if(code[0] == "ld"){
            t = code[2].split('(');
            t[1] = t[1].slice(0,-2);
            t[0] = parseInt(t[0]);
            var a = this.regs[t[1]] + t[0];//地址
            this.regs[code[1]] = 0;
            for(var i = 0; i < 8; i++){
                this.regs[code[1]]  += this.stackSegment[a - i] << (28 - 4 * i);
            }     
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
