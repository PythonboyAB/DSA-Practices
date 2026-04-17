// Reverse an Array – Problem Statement

// Question:
// Given an array of integers, write a program to reverse the array in-place (without using extra space).

// Input:
// An integer array arr of size n.

// Output:
// The same array but with elements in reverse order.

// Example 1

// Input
// arr = [1, 2, 3, 4, 5]

// Output
// [5, 4, 3, 2, 1]

// Example 2

// Input
// arr = [10, 20, 30, 40]

// Output
// [40, 30, 20, 10]

// Constraints (typical interview version)

// 1 ≤ n ≤ 10^5

// -10^9 ≤ arr[i] ≤ 10^9

public class reverseArrary {


    public static void reverseArr(int arr[]){
        int first =0;
        int last = arr.length-1;
        while (first<last){   
            int temp = arr[first];
            arr[first]=arr[last];
            arr[last]=temp;
            last--;
            first++;
            
        }
    }
    public static void main (String[] args){
        int arr[] = {1,2,3,4,5,6,7,8,9};
        reverseArr(arr);
        for(int i = 0 ; i<arr.length; i++){
            System.out.print(arr[i]);
        }
    }
    
}
