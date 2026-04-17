
public class LargestNum {

    public static void largestNumFinder(int arr[]){
        int largestNumber = arr[0];
        int smallestNumber= arr[0];
        for(int i=1;i<arr.length; i++){
            if(arr[i]>largestNumber){
                largestNumber=arr[i];
            }
            if(arr[i]<smallestNumber){
                smallestNumber=arr[i];
            }
       }
        System.out.println("largest number is " + largestNumber);  
        System.out.println("smallest number is " + smallestNumber);
    }

     public static void main (String args[]){
        int arr[] ={1,1,2,2,0,3,4,4,5,6,6,7};
    largestNumFinder(arr);

     }
}