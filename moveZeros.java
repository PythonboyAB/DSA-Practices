public class moveZeros {

        // int sampleArray[] = {0,2,0,3,0,2,0,3,3,0};

        // public static int[] moveZerosToEnd(int[] arr){
        //     int count =1;
        //     for(int i =0; i<arr.length;i++){
        //         for(int j=0;j<=arr.length-count;j++){
        //             if(arr[j]==0){
        //                 int temp=arr[arr.length-count];
        //                 arr[arr.length-count]=arr[j];
        //                 arr[j]=temp;
        //                 count++;

        //             }
        //         }
                
        //     }
        //     return arr;
        // }
        
        public static int[] moveZerosToEnd (int [] arr){
            //  int sampleArray[] = {1,2,0,3,0,2,0,3,3,0};

            int index = 0; // 0+1+1+1
            for(int i=0;i<arr.length;i++){
                if(arr[i]!=0){
                    arr[index]=arr[i];
                    index++;
                }
            }
            while (index<arr.length) {
                arr[index]=0;
                index++;
                
            }
            
            return arr;
        }
    public static void main(String args[]){
        
        int sampleArray[] = {1,2,0,3,0,2,0,3,3,0};
        int[] result= moveZerosToEnd(sampleArray);
        for(int i = 0; i<result.length; i++ ){
            System.out.print(result[i]);
        }
    }
}
