public class missingNumber {
    public static int findMissingNumber(int[]arr){
        int sum=0;
        int actualSum=0;

        for(int i =1; i<=arr.length;i++){
            sum= sum+arr[i-1];
            actualSum= actualSum+i;
        }

        return (actualSum-sum);
    }
    public static void main(String[] args) {
        int [] num= {1,2,0,3,5};
        System.out.println(findMissingNumber(num));
    }
}
