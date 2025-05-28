import { PlayerInterface as Player } from "../interface/interface";

// player 인스턴트 저장
export default function localStorageAPI(){
    
    interface SStorage<T> {
        [key: string]: T; 
    }

    class LocalStorage<T> {
        private storage: SStorage<T> = {};

        set(key: string, value: T): void {
            if (this.storage[key] !== undefined) {
                console.dir(`${key}가 이미 설정되어 있습니다.`);
                return;
            }
            this.storage[key] = value;
            console.dir(`${key}: ${value}를 설정했습니다.`);
        }

        get(key: string): T | void {
            if (this.storage[key] === undefined) {
                console.dir(`${key}가 존재하지 않습니다.`);
                return;
            }
            return this.storage[key];
        }

        update(key: string, value: T): void {
            if (this.storage[key] !== undefined) {
                this.storage[key] = value;
                console.dir(`${key}을 ${value}로 업데이트 했습니다.`);
            } else {
                console.dir(`${key}가 존재하지 않았습니다. 새롭게 설정합니다.`);
                this.storage[key] = value;
            }
        }

        remove(key: string): void {
            if (this.storage[key] === undefined) {
                console.dir(`${key}가 존재하지 않습니다.`);
                return;
            }
            delete this.storage[key];
            console.dir(`${key}를 삭제했습니다. `);
        }

        clear(): void {
            this.storage = {};
            console.dir("스토리지를 비웠습니다.");
        }
    }

    // 문자열
    const stringStorage = new LocalStorage<string>();
    console.group("String Storage")

    console.log('stringStorage.get("name")의 결과', stringStorage.get("name"));

    stringStorage.set("name", "Alice");
    
    console.log('stringStorage.get("name"))의 결과', stringStorage.get("name"));
    
    stringStorage.set("greeting", "Hello");

    stringStorage.update("name", "Bob");

    console.log('stringStorage.get("name")', stringStorage.get("name"));

    stringStorage.remove("greeting");

    console.log('stringStorage.get("greeting")', stringStorage.get("greeting"));

    stringStorage.clear();

    console.log('stringStorage.get("name")', stringStorage.get("name"));

    console.groupEnd()

    // 불리언
    const booleanStorage = new LocalStorage<boolean>();
    console.group("Boolean Storage")

    booleanStorage.get("isReady");

    booleanStorage.set("isReady", true);

    console.log(`booleanStorage.get("isReady")의 결과`,booleanStorage.get("isReady"));

    booleanStorage.set("isLoading", false);

    // booleanStorage.set("name", "Charlie"); 에러

    booleanStorage.update("isReady", false);

    console.dir(`booleanStorage.get("isReady")의 결과`, booleanStorage.get("isReady"));

    console.groupEnd()

    // Player
    console.group('Player Storage')
    const playerStorage = new LocalStorage<Player>();

    const user1 = new Player(
        "First",
        "User"
    )

    const user2 = new Player(
        "Second",
        "User"
    )

    const user3 = new Player(
        "Third",
        "User"
    )

    playerStorage.get("user1");

    playerStorage.set("user1", user1);

    console.table(playerStorage.get("user1"));

    playerStorage.set("user2", user2);

    playerStorage.update("user1", user3);

    console.dir(playerStorage.get("user1"));

    console.groupEnd()
}