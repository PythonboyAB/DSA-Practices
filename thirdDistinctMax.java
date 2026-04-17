public class thirdDistinctMax {

    
    public static int thirdMax(int[] nums) {
        int first=Integer.MIN_VALUE;
       int second=Integer.MIN_VALUE;
       int third=Integer.MIN_VALUE;

        for (int num : nums) {
            if(num>first){
                third=second;
                second=first;
                first=num;
            }
           else if(num<first && num>second ){
                third=second;
                second=num;
            }
            else if(num<first && num<second && num>third){
                third=num;
            }

           
        }
        System.out.println("first"+ first);
        System.out.println("second"+ second);
        System.out.println("third"+ third);
            return 0;
        // return third == null ? first.intValue() : third.intValue();
    }

    public static void main(String[] args){
        int[] num = {5,2,2,2,2,2 };

        thirdMax(num);
    }
}
