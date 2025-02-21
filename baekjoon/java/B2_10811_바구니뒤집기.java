package baekjoon;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class B2_10811_바구니뒤집기 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine(), " ");
        int n = Integer.parseInt(st.nextToken());
        int m = Integer.parseInt(st.nextToken());
        int[] arr = new int[n];

        for (int i = 0; i < n; i++) {
            arr[i] = i + 1;
        }

        for (int i = 0; i < m; i++) {
            st = new StringTokenizer(br.readLine(), " ");
            int I = Integer.parseInt(st.nextToken()) - 1;
            int J = Integer.parseInt(st.nextToken()) - 1;

            while(I<J) {
                int temp = arr[I];
                arr[I++] = arr[J];
                arr[J--] =  temp;
            }

        }
        for(int answer : arr)
            System.out.print(answer + " ");
    }
}
