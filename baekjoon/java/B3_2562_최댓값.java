package baekjoon;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class B3_2562_최댓값 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int arr[] = new int[9];
        int max = arr[0];
        int index = 0;

        for (int i = 0; i < 9; i++) {
            arr[i] = Integer.parseInt( br.readLine());
            if(max < arr[i]){
                max = arr[i];
                index = i+1;
            }

        }
        System.out.println(max);
        System.out.println(index);
    }
}
