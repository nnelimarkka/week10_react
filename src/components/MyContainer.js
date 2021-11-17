import React, {Suspense} from 'react';
import { useTranslation } from 'react-i18next';

const MyContainer = () => {
    const {t, i18n} = useTranslation();

    return (
        <div>
            {t("This is the front page")}
        </div>
    )
}

export default function App() {
    return (
        <Suspense fallback="loading">
            <MyContainer />
        </Suspense>
    )
}
