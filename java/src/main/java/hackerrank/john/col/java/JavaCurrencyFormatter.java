package hackerrank.john.col.java;

import java.util.*;
import java.text.*;

public class JavaCurrencyFormatter {
    
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double payment = scanner.nextDouble();
        scanner.close();
        
        NumberFormat us = NumberFormat.getCurrencyInstance(Locale.US);
        NumberFormat china = NumberFormat.getCurrencyInstance(Locale.CHINA);
        NumberFormat france = NumberFormat.getCurrencyInstance(Locale.FRANCE);
    
        NumberFormat india = NumberFormat.getCurrencyInstance(new Locale("en", "INDIA"));
        DecimalFormatSymbols format = new DecimalFormatSymbols();
        format.setCurrencySymbol("Rs.");
        ((DecimalFormat) india).setDecimalFormatSymbols(format);
        
        System.out.println("US: " + us.format(payment));
        System.out.println("India: " + india.format(payment));
        System.out.println("China: " + china.format(payment));
        System.out.println("France: " + france.format(payment));
    }
}

