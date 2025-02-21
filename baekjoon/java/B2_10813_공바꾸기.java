package baekjoon;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.IOException;
import java.util.StringTokenizer;

public class B2_10813_공바꾸기 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        // 첫 번째 줄 입력 (N, M)
        int n = Integer.parseInt(st.nextToken());
        int m = Integer.parseInt(st.nextToken());

        // 크기 n인 배열 생성
        int[] arr = new int[n];

        for (int i = 0; i < n; i++) {
            arr[i] = i+1;
        }
        // M번 공 넣기
        for (int i = 0; i < m; i++) {
            st = new StringTokenizer(br.readLine());
            int I = Integer.parseInt(st.nextToken());
            int J = Integer.parseInt(st.nextToken());
            int temp;

            temp = arr[I-1];
            arr[I-1] = arr[J-1];
            arr[J-1] = temp;
        }

        // 결과 출력
       for(int num : arr)
           System.out.print(num + " ");
    }
}
