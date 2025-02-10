package baekjoon;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class B2_2675_문자열반복 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int t= Integer.parseInt(br.readLine());

        for (int i = 0; i < t; i++) {
            StringTokenizer st = new StringTokenizer(br.readLine());
            int repeatCount = Integer.parseInt(st.nextToken());
            String s = st.nextToken();

            StringBuilder sb = new StringBuilder();

            for (char c : s.toCharArray()){
                sb.append(String.valueOf(c).repeat(repeatCount));
            }
            System.out.println(sb.toString());
        }

    }
}
