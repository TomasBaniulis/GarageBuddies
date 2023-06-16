package lt.code.academy.garagebuddiesapi.data;

public enum RepairType {
    ENGINE_OIL_CHANGE ("Engine oil change"),
    TRANSMISSION_OIL_CHANGE ("Transmission oil change"),
    BATTERY_CHANGE ("Battery change"),
    SPARK_PLUGS_CHANGE ("Spark plugs change"),
    GLOW_PUG_CHANGE ("Glow plug change"),
    CLUTCH_CHANGE ("Clutch change"),
    BRAKES_REPAIR ("Brakes repair"),
    ENGINE_REPAIR ("Engine repair"),
    ELECTRIC_REPAIR("Electric repair"),
    SUSPENSION_REPAIR("Suspention repair"),
    EXHAUST_REPAIR("Exaust repair"),
    COOLING_SYSTEM_REPAIR("Cooling system repair"),
    AIR_CONDITIONING_REPAIR("air conditioning repair"),
    PERIODIC_CHECK_OF_CAR ("Periodic car maintenance/check");

    private final String string;

    RepairType(String string){
        this.string = string;
    }
}


