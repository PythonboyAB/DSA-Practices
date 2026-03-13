public class SecondLargest{

    public static int FindSecondLargest(int arr[]){
        int largest =arr[0];
        int secondLargest = -1;

        // int arr[] = { 9,8,7,6,55,42,3,21,1};
        for( int i=1; i<arr.length; i++){
            if( arr[i]>largest){
                secondLargest =largest;
                largest = arr[i];
            }
            else if(arr[i]<largest && arr[i]>secondLargest){
                secondLargest=arr[i];
            }
        }
        return secondLargest;
       
    }

    public static void main(String[] args){
        int arr[] = { 9,8,7,6,55,42,3,21,1};
        
       
        System.out.println(FindSecondLargest(arr));
    }
}