package baekjoon;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class B4_11720_숫자의합 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        br.readLine();
        String st = br.readLine();
        int sum=0;

        for ( char c: st.toCharArray()){
            sum += c -'0';
        }
        System.out.println(sum);
    }
}
