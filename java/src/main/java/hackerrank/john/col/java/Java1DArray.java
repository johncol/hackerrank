package hackerrank.john.col.java;

import java.util.*;

public class Java1DArray {
	boolean[] beenAt;
  int leap;
  int[] game;

  Java1DArray(int leap, int[] game) {
    this.leap = leap;
    this.game = game;
    this.beenAt = new boolean[game.length];
  }

	public boolean canWinAtIndex(int index) {
		if (index >= game.length) {
			return true;
		}
		if (index < 0) {
			return false;
		}

		beenAt[index] = true;

		int leapIndex = index + leap;
		boolean canWinWithLeap =
			notBeenAt(leapIndex) &&
      allowedAtIndex(leapIndex) &&
			canWinAtIndex(leapIndex);

		int nextIndex = index + 1;
		boolean canWinWithNext =
			notBeenAt(nextIndex) &&
      allowedAtIndex(nextIndex) &&
			canWinAtIndex(nextIndex);

		int prevIndex = index - 1;
		boolean canWinWithPrev =
			notBeenAt(prevIndex) &&
      allowedAtIndex(prevIndex) &&
			canWinAtIndex(prevIndex);

		return canWinWithLeap || canWinWithNext || canWinWithPrev;
	}

	public boolean notBeenAt(int index) {
		if (index < 0 || index >= game.length) {
			return true;
		}

		return !beenAt[index];
	}

	public boolean allowedAtIndex(int index) {
		if (index < 0 || index >= game.length) {
			return true;
		}

		return game[index] == 0;
	}

	public static boolean canWin(int leap, int[] game) {
		return new Java1DArray(leap, game).canWinAtIndex(0);
	}

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int q = scan.nextInt();
		while (q--> 0) {
			int n = scan.nextInt();
			int leap = scan.nextInt();

			int[] game = new int[n];
			for (int i = 0; i<n; i++) {
				game[i] = scan.nextInt();
			}

			System.out.println((canWin(leap, game)) ? "YES" : "NO");
		}
		scan.close();
	}
}
