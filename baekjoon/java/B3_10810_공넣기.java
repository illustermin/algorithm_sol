package baekjoon;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.Scanner;

public class B3_10810_공넣기{
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] arr = new int[n];
        int m = sc.nextInt();

        for (int i = 0;  i< m; i++) {
            int I = sc.nextInt();
            int J = sc.nextInt();
            int K = sc.nextInt();

            for (int j = I-1; j < J; j++) {
                arr[j] = K;
            }

        }
        for (int k = 0; k < n; k++) {
            System.out.print(arr[k] + " ");
        }

    }

}
