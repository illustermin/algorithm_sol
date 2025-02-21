package baekjoon;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.StringTokenizer;

public class B1_1546_평균 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        // 첫 번째 입력: 점수 개수
        int n = Integer.parseInt(br.readLine());

        // 두 번째 입력: 점수들
        StringTokenizer st = new StringTokenizer(br.readLine(), " ");

        double[] arr = new double[n];

        // 점수 배열에 값 입력
        for (int i = 0; i < n; i++) {
            arr[i] = Double.parseDouble(st.nextToken());
        }

        // 최대값 구하기
        double max = Arrays.stream(arr).max().getAsDouble();

        // 새로운 평균 계산
        double sum = 0;
        for (double score : arr) {
            sum += (score / max) * 100;
        }

        // 평균 출력
        System.out.println(sum / n);
    }
}