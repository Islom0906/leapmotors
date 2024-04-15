import {CarDetailBanner} from "@/components";
import {useTranslation} from "react-i18next";

const C10 = () => {
    const {t}=useTranslation()
    return (
            <main className={'bg-black'}>
                <CarDetailBanner
                    img={`${process.env.NEXT_PUBLIC_API_URL}/media/e370fbc7-ad3c-4828-a089-2d424e67c0ac-section-2-logo.png`}
                    bg={`/c10/screen1-1.png`}
                    bgRes={`/c10/screen1-1.png`}
                    text={t('c01.CarDetailBanner.title')}
                    model={'C01'}
                />
            </main>
    );
};

export default C10;