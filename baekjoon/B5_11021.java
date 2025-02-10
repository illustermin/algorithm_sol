package baekjoon;

import java.io.*;

public class B5_11021 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine());

        for(int i=1; i<=n; i++){
            String s = br.readLine();
            int a = Integer.parseInt(s.split(" ")[0]);
            int b = Integer.parseInt(s.split(" ")[1]);

            int sum = a+b;
            System.out.printf("Case #%d: %d", i, sum);
            System.out.println();

        }
    }
}
