function longestKSubstr(s, k) {
  let hashMap = {};
  let l=0;
  let r=0;
  let length = 0;
  let maxLength = -1;
  while(r<s.length){
      if(!hashMap[s[r]])
          hashMap[s[r]] = 1;
      else 
        hashMap[s[r]] = hashMap[s[r]] + 1;
          
      if(Object.keys(hashMap).length > k){
          hashMap[s[l]] = hashMap[s[l]]-1;
          if(hashMap[s[l]] == 0)
              delete hashMap[s[l]];
          l++;
      }
      if(Object.keys(hashMap).length == k){
        length = r-l+1;
        maxLength = Math.max(length,maxLength);
      }

      r++;
  }
  
  return maxLength;
}
console.log(longestKSubstr("aabacbebebe", 5)); // 8