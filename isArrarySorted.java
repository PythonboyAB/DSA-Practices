public class isArrarySorted {

    public static boolean isArrSorted(int arr[]){
        for(int i=1;i<arr.length;i++){
            if(arr[i]>=arr[i-1]){

            }
            else{
                return false;
            }
        }
        return true;
    }
    public static void main (String[] args){
        int arr[]= {1,2,3,3,4,5,6,6,7,8};
       System.out.print(isArrSorted(arr));
    }
}
