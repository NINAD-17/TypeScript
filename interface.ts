interface User {
    readonly dbId: number
    email: string
    userId: number
    googleId?: string
    // startTrail: () => string
    startTrail(): string // Another way
    getCoupon(couponName: string, value: number): number
}

interface User {
    gitHubId: string
}

interface Admin extends User {
    role: "Admin" | "ta" | "Learner"
}

const ninad: User = {
    dbId: 12,
    email: "ninad@kakao.com",
    userId: 1123,
    startTrail: () => {
        return "Trail Started :>";
    },
    getCoupon(name: "ninad17", off: 10) {
        return 10;
    },
    gitHubId: "ND"
}

ninad.email = "ninad@naver.com";