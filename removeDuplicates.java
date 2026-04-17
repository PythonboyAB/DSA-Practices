public class removeDuplicates {

    public static int [] removeDuplicateArray(int arr[]){
       int [] copyArray = new int [arr.length];
        int mainArray =1;
        int DuplicateArrary =0;
        copyArray[0] =arr[0];
       while (mainArray<arr.length) {
        if(arr[mainArray]!=copyArray[DuplicateArrary]){
            DuplicateArrary++;
            copyArray[DuplicateArrary]=arr[mainArray];
            mainArray++;
        }
        else{
            mainArray++;
        }
        
       }
       return copyArray;
       


    }
    public static void main (String[] args){

    int arr[]={0,0,1,1,1,2,2,3,4,4,5,7,7,8,9,9,9,9};

    int result[] = removeDuplicateArray(arr);

    for(int i=0;i<result.length;i++){
        System.out.print(result[i] + " ");
    }
    
}}
