"use client";
import Link from 'next/link';
import { use } from 'react';

export default function NewsArticle({
    params,
    searchParams,
}: {
    params: Promise<{ articleID: string }>
    searchParams: Promise<{ lang?: "en" | "de" | "fr" }>;
}) {
    const { articleID } =  use(params);
    const { lang } =  use(searchParams);
    return (
    <div>
        <h1>News article {articleID}</h1>
        <p>Reading in {lang}</p>

        <div>
            <Link href={`/articles/${articleID}?lang=en`}>English</Link>
            <Link href={`/articles/${articleID}?lang=de`}>German</Link>
            <Link href={`/articles/${articleID}?lang=fr`}>French</Link>
        </div>
    </div>
    )
}