

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
