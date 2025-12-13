// ULTIMATE TEST & IMPROVE – Professional, fast, attractive UX – 100% Gemini AntiGravity 2025
import lighthouse from 'lighthouse';
import * as chromeLauncher from 'chrome-launcher';

async function runLighthouse(url) {
    console.log(`🔍 Running Lighthouse audit on ${url}...`);

    const chrome = await chromeLauncher.launch({ chromeFlags: ['--headless'] });
    const options = {
        logLevel: 'info',
        output: 'json',
        onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
        port: chrome.port,
    };

    const runnerResult = await lighthouse(url, options);
    await chrome.kill();

    const { lhr } = runnerResult;
    const categories = lhr.categories;

    console.log('\n📊 LIGHTHOUSE SCORES:');
    console.log(`Performance: ${Math.round(categories.performance.score * 100)}/100`);
    console.log(`Accessibility: ${Math.round(categories.accessibility.score * 100)}/100`);
    console.log(`Best Practices: ${Math.round(categories['best-practices'].score * 100)}/100`);
    console.log(`SEO: ${Math.round(categories.seo.score * 100)}/100`);

    const allPerfect = Object.values(categories).every(cat => cat.score >= 0.9);

    if (allPerfect) {
        console.log('\n✅ ALL SCORES 90+! EXCELLENT!');
    } else {
        console.log('\n⚠️  Some scores need improvement.');
    }

    return lhr;
}

// Run audit
runLighthouse('http://localhost:3000').catch(err => {
    console.error('Lighthouse audit failed:', err);
    process.exit(1);
});
