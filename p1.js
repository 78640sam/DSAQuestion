var arr=[1,2,3,4,5,6,7,8];
out=""
for(var i=0;i<arr.length;i++){
if(i%2==0){
  out+="ram"
}esle if(i%3==0){
out+="shyam"
}else{
  out+="mohan"
}
}

function gele(n,arr){
    //console.log(n,arr)
    var s=[];
    var ans=[];
    for(var i=n-1;i>=0;i--){
        while(s.length>0&&s[s.length-1]<=arr[i]){
            s.pop();
        }
      ans[i]=s.length>0 ? s[s.length-1]:-1;

       s.push(arr[i]);
    }
   
    
    console.log(ans.join(" "));
}
