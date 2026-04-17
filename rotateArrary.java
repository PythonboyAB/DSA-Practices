// 📥 Input
// An integer array arr[]
// An integer k (number of positions to rotate)

// 📤 Output
// The array after rotating it by k positions
// 🧪 Example 1 (Right Rotation)

// Input:  arr = [1, 2, 3, 4, 5], k = 2  
// Output: [4, 5, 1, 2, 3]
// duplicate ={4,5}

// 🧪 Example 2 (Left Rotation)
// Input:  arr = [1, 2, 3, 4, 5], k = 7  
//  [5,1,2,3,4]
// [3,4,5,1,2]

// Output: [3, 4, 5, 1, 2]




public class rotateArrary {

    public static int[] rotate(int[] arr , int k){
        k=k%arr.length;

        reverse(arr, 0, arr.length-1);  /// reversing whole array
        reverse(arr, 0, k-1);   // reversing left side of array from starting to k-1
        reverse(arr, k, arr.length-1);   // reversing right side of array from k to n

        

      

        return arr;
    }

public static int[] reverse(int[] arr, int start , int end){

    while (start < end) {
        int temp = arr[start];
        arr[start]=arr[end];
        arr[end]=temp;
        start++;
        end--;
        
    }

    return arr;
}

    // public static int[] reverse(int[] arr){
    //      int count=arr.length-1;
    //     for(int i=0;i<count;i++){
    //         int temp=arr[i];
    //         arr[i]=arr[count];
    //         arr[count]=temp;
    //         count--;
    //     }
    //     return arr;
    // }
    public static void main (String[] args){

  int nums[]= {3,0,1};
  int sum=0;
        int actualSum=0;
        for(int i=1;i<=nums.length;i++){
             sum= sum+nums[i-1];  
             actualSum=actualSum+i; 
        }
        System.out.println(actualSum-sum);
        
    }
}
