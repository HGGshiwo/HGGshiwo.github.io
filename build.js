function node(element,leftchild,rightchild,l_width,r_width){
    this.leftchild=leftchild;
    this.rightchild=rightchild;
    this.element=element;
    this.x=0;
    this.y=0;
    this.width=0;
    this.l_width=l_width;
    this.r_width=r_width;
    this.color="w";
}

function build_tree(root_element,left_element,right_element){
    var root=new node(root_element,null,null);
    var ll=0,lr=0,rl=0,rr=0;//左孩子最左侧相对根的位置，左孩子的最右侧相对根的位置（防止右孩子是null）
    if(left_element==null){
        root.leftchild=null;
    }
    else if (left_element.indexOf('[')==-1){//这是一个叶子节点
        root.leftchild=new node(left_element,null,null,-1,0);
        ll=-1;lr=0;
    }
    else{
        var a=find_subtree(left_element);
        root.leftchild= build_tree(a[0],a[1],a[2]);
        ll=root.leftchild.l_width-1;
        lr=root.leftchild.r_width-1;
    }

    if(right_element==null){
        root.rightchild=null;
    }
    else if (right_element.indexOf('[')==-1){
        right_element=right_element.substring(0,right_element.length);
        root.rightchild=new node(right_element,null,null);
        rl=0;rr=1;
    }
    else{
        var a=find_subtree(right_element);
        root.rightchild= build_tree(a[0],a[1],a[2]);
        rl=root.rightchild.l_width+1;
        rr=root.rightchild.r_width+1;
    }
    root.r_width=Math.max(rr,rl,lr,ll);
    root.l_width=Math.min(rr,rl,lr,ll);
    return root;
}

function find_subtree(s){
    var a=new Array(3);
    var i=s.indexOf('[');//i代表左子树的前括号
    var j=i+1;//j代表左子树的后括号
    var flag=1;
    while(true){
        if(s[j]=='[') flag+=1;
        if(s[j]==']') flag-=1;
        if(flag==0) break;
        j+=1;
    }
    a[0] = s.substring(0,i);
    a[1]=(i+1 == j)? null: s.substring(i+1,j);
    a[2]=(j+2 == s.length-1)? null: s.substring(j+2,s.length-1);
    console.log(a);
    return a;
}

function level(root){
    var l_level,r_level;
    if(root.leftchild==null)
        l_level=0;
    else
        l_level=level(root.leftchild);
    
    if(root.rightchild==null)
        r_level=0;
    else
        r_level=level(root.rightchild);
    
    return Math.max(l_level,r_level)+1;
}

function find_coordinate(root){
    var root_level=level(root);
    max_width=Math.pow(2,root_level)*9;
    queue = [];
    if(root.l_width==0) root.l_width=-root.r_width;
    if(root.r_width==0) root.r_width=-root.l_width;
    root.x=350*root.l_width/(-root.r_width+root.l_width);
    root.y=50;
    root.width=max_width;
    
    queue.push(root);
    while(queue.length){
        var a=queue.shift();
        if(a.leftchild!=null){
            var l_weight=-a.l_width/(a.r_width-a.l_width);
            a.leftchild.x=a.x-a.width*l_weight;
            a.leftchild.y=a.y+50;
            a.leftchild.width=a.width*l_weight;
            queue.push(a.leftchild);
        }
        if(a.rightchild!=null){
            var r_weight=a.r_width/(a.r_width-a.l_width);
            a.rightchild.x=a.x+a.width*r_weight;
            a.rightchild.y=a.y+50;
            a.rightchild.width=a.width*r_weight;
            queue.push(a.rightchild);
        }
    }
}

function draw_node(ctx,root){
    var radius=15;
    var lineWidth=2;
    ctx.beginPath();
    ctx.strokeStyle = (node.color=='r') ? "#ff0000":"#000000";
    ctx.lineWidth = lineWidth;
    ctx.arc(root.x, root.y, radius, 0, Math.PI*2, true);
    ctx.stroke();

    ctx.font="bold 15pt Times New Roman";
    ctx.fillText(root.element, root.x-4*root.element.length, root.y+2.5*lineWidth);

    if(root.leftchild!=null){
        ctx.beginPath();
        ctx.moveTo(root.x,root.y+radius);
        ctx.lineTo(root.leftchild.x,root.leftchild.y-radius);
        ctx.stroke();
        draw_node(ctx,root.leftchild);
    }
    
    if(root.rightchild!=null){
        ctx.beginPath();
        ctx.moveTo(root.x,root.y+radius);
        ctx.lineTo(root.rightchild.x,root.rightchild.y-radius);
        ctx.stroke();
        draw_node(ctx,root.rightchild);
    }
}

function draw_tree(s){
    var a=find_subtree(s);
    var root=build_tree(a[0],a[1],a[2]);
    find_coordinate(root);
    console.log(root);
    var canvas=document.getElementById("Canvas");
    var ctx=canvas.getContext("2d");
    ctx.clearRect(0,0,canvas.width,canvas.height);  
    draw_node(ctx,root);
}