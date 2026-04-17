public class findDuplicate {
    
    public static int findElement(int[] arr){
        int num=0;
        //nums = [1,3,4,2,2]
        for(int i=0;i<arr.length-1;i++){
            for(int j=i+1; j<arr.length;j++){
                if(arr[i]==arr[j]){
                    num= arr[i];
                }
            }
        }

        return num ;
    }


    public static void main(String[] args){
        int nums[] = {1,3,4,2,9,4,8};

        System.out.println(findElement(nums));
    }
}
