public class recursion {

//      public static void countNum(int num , int i){
//         if(num<i){
            
//             return;
            
//         }
//         countNum(num,i+1);
//         System.out.println(i);
//     }

//     public static int factorial(int n){
//         if(n==1){
//             return 1;
//         }
//         return n*factorial(n-1);
//     }

//     public static int[] reverseArr(int start , int end, int[] arr){

//         if(start>=end){
//            return arr;
//         }
//         int temp=arr[start];
//          arr[start]=arr[end];
//          arr[end]=temp;
//         return reverseArr(start+1, end-1, arr);
//     }



//     public static boolean isPalidrome(int start, String word){
//         if(start>=word.length()/2){
//             return true;
//         }
//         if(word.charAt(start)!=word.charAt(word.length()-start-1)){
//             return false;
//         }

//         return isPalidrome(start+1, word);
//     }
//     // 0,1,1,2,3,5,8

// public static int fibonacci(int num){
//     if(num==0 || num==1){
//         return num;
//     }
//     return fibonacci(num-1)+fibonacci(num-2);
// }

// public static void reverseString(String word, int count){
//     if(word.length()==count){
//         return;
        
//     }
//     reverseString(word, count+1);
//     System.out.print(word.charAt(count));
    
// }

// public static int fibonacci(int [] arr,int i){
//     int sum=0;
//     if(arr.length<=i){
//         return i;
//     }

//     return sum;
// }||
public static int count( int n){
    if(n==0 || n==1){
       return n;
    }
    
   return count(n-1)+count(n-2);
   
    
    
}


    // public
     public static void main(String[] args){
        

        // int nums[]={1,2,3,4,5};
        // reverseArr(0, nums.length-1, nums);
        // for(int i=0;i<nums.length;i++){
        //     System.out.println(nums[i]);
        // }

        // String word="madam";
        // System.out.println(isPalidrome(0, word));
    System.out.println(count(10));
     }
}