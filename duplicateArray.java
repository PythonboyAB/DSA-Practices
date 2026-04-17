public class duplicateArray {
    public static void findDuplicate(int [] arr){
        for(int i=0; i<arr.length;i++){
            int count =0;
            for(int j=0; j<arr.length;j++){
                
                if(arr[i]==arr[j]){
                    count+=1;
                }
            }
            if(count>=2){
                System.out.println(arr[i]);
            }
            count=0;
        }
    }
    public static void main(String[] args) {
        int [] arr={1,2,3,3,2,4,1};
        findDuplicate(arr);

    }
}
