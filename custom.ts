/**
 * Nutze diese Datei für benutzerdefinierte Funktionen und Blöcke.
 * Weitere Informationen unter https://makecode.microbit.org/blocks/custom
 */

enum MyEnumSteckdosenNummer {
    //% block="K1"
    K1,
    //% block="K2"
    K2
}

enum MyEnumState {
    //% block="Ein"
    ON,
    //% block="Aus"
    OFF
}

enum MyEnumFunkgruppen {
    BOX1 = 51,
    BOX2 = 52,
    BOX3 = 53,
    BOX4 = 54
}


/**
 * Benutzerdefinierte Blöcke
 */
//% weight=100 color=#0fbc11 icon=""
namespace Steckdose {
    /**
     * Schaltet eine zweikanalige Funksteckdose, welche einen Micro:Bit enthält.
     * @param ch Kanal, welcher geschaltet werden soll
     * @param state Status des Kanals (Ein oder Aus)
     */
    //% block
    export function schalteSteckdose(ch: MyEnumSteckdosenNummer, state: MyEnumState): void {
        // Add code 
        if(state == MyEnumState.ON){
            if(ch == MyEnumSteckdosenNummer.K1){
                radio.sendValue("K1", 1);
            }else if (ch == MyEnumSteckdosenNummer.K2){
                radio.sendValue("K2", 1);
            }  
        }else{
            if(ch == MyEnumSteckdosenNummer.K1){
                radio.sendValue("K1", 0);
            }else if (ch == MyEnumSteckdosenNummer.K2){
                radio.sendValue("K2", 0);
            }  
        }
    }

    /**
     * Wählt eine zweikanalige Funksteckdose aus, welche einen Micro:Bit enthält.
     * @param funkgruppe Wahl der Funksteckdose, die bedient werden soll.
     */
    //% block
    export function auswahlSteckdose(funkgruppe: MyEnumFunkgruppen): void {
        // Add code here
        radio.setGroup(funkgruppe);
    }    
}