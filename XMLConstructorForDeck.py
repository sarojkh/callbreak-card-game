#!/usr/bin/python

import sys

def getNumericValueOf(faceValue):
    return{
        'j':11,
        'q':12,
        'k':13,
        'a':14,
    }[faceValue]

def getSuitInitials(suit):
    return{
         'spade':'s',
         'diamond':'d',
         'club':'c',
         'heart':'h',
    }[suit]

def main():
    suits=["spade", "diamond", "club", "heart"]
    faceValues=["a", "2", "3", "4", "5", "6", "7", "8", "9", "10", "j", "q", "k"]
    print "<deck>"
    for suit in suits:
        suitInitials=getSuitInitials(suit)
        for faceValue in faceValues:
            if faceValue== "a" or faceValue=="j" or faceValue=="q" or faceValue=="k":
                numericValue=getNumericValueOf(faceValue)
            else:
                numericValue=faceValue
            print "\t<card>"
            print "\t\t<suit>"+suit+"</suit>"
            print "\t\t<faceValue>"+faceValue+"</faceValue>"
            print "\t\t<numericValue>"+str(numericValue)+"</numericValue>"
            print "\t\t<imageFile>"+faceValue+suitInitials+".gif</imageFile>"
            print "\t</card>"

    print "</deck>"


if __name__=="__main__":
    main()
