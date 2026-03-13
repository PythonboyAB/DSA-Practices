public class  LargestNum  {

    public static int FindLargestnum (int n[]){
        int largest = n[0];
        for(int i=1; i<n.length;i++){
            if(largest<n[i]){
                largest = n[i];
            }
        }
        return largest;
    }
 public static void main (String[] args){
    int arr[] = {1,4,5,5,3,2,1,10,99,3,2,9};
    System.out.print(FindLargestnum(arr));

 }
}