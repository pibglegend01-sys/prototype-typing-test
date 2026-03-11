// Supabase Initialization
const supabaseUrl = 'https://qvtetshqaduhkolyogay.supabase.co';
const supabaseAnonKey = 'sb_publishable_k-76HV2z9s2290hRI_H-Hg_OI-0vz8-';
const supabase = window.supabase.createClient(supabaseUrl, supabaseAnonKey);

// DOM Elements
const authForm = document.getElementById('auth-form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const usernameInput = document.getElementById('username');
const usernameGroup = document.getElementById('username-group');
const submitBtn = document.getElementById('submit-btn');
const toggleBtn = document.getElementById('toggle-btn');
const toggleText = document.getElementById('toggle-text');
const loginTitle = document.getElementById('login-title');
const errorMsg = document.getElementById('error-message');

let isLoginMode = true;

// Toggle between Login and Sign Up
toggleBtn.addEventListener('click', (e) => {
    e.preventDefault();
    isLoginMode = !isLoginMode;
    errorMsg.innerText = '';
    
    if (isLoginMode) {
        loginTitle.innerText = 'Welcome Back';
        submitBtn.innerText = 'Sign In';
        toggleText.innerText = "Don't have an account? ";
        toggleBtn.innerText = 'Sign Up';
        usernameGroup.classList.add('hidden');
        usernameInput.removeAttribute('required');
    } else {
        loginTitle.innerText = 'Create Account';
        submitBtn.innerText = 'Sign Up';
        toggleText.innerText = 'Already have an account? ';
        toggleBtn.innerText = 'Sign In';
        usernameGroup.classList.remove('hidden');
        usernameInput.setAttribute('required', 'true');
    }
});

// Handle Form Submission
authForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    errorMsg.innerText = '';
    
    const email = emailInput.value.trim();
    const password = passwordInput.value;
    const username = usernameInput.value.trim();
    
    if (!email || !password || (!isLoginMode && !username)) {
        errorMsg.innerText = 'Please fill out all required fields.';
        return;
    }
    
    submitBtn.disabled = true;
    const originalText = submitBtn.innerText;
    submitBtn.innerText = 'Please wait...';
    
    try {
        if (isLoginMode) {
            // Log In
            const { data, error } = await supabase.auth.signInWithPassword({
                email,
                password,
            });
            
            if (error) throw error;
            
            // Redirect on success
            window.location.href = 'index.html';
            
        } else {
            // Sign Up
            const { data, error } = await supabase.auth.signUp({
                email,
                password,
                options: {
                    data: {
                        username: username
                    }
                }
            });
            
            if (error) throw error;
            
            // Show success message, auto login usually works, but just in case
            if (data?.session) {
                window.location.href = 'index.html';
            } else {
                errorMsg.style.color = 'var(--correct-color)';
                errorMsg.innerText = 'Signup successful! You can now log in.';
                // Switch to login mode
                toggleBtn.click();
            }
        }
    } catch (error) {
        errorMsg.style.color = 'var(--incorrect-color)';
        errorMsg.innerText = error.message;
    } finally {
        submitBtn.disabled = false;
        submitBtn.innerText = originalText;
    }
});

// Check if already logged in
async function checkCurrentSession() {
    const { data: { session } } = await supabase.auth.getSession();
    if (session) {
        // Already logged in, redirect
        window.location.href = 'index.html';
    }
}

document.addEventListener('DOMContentLoaded', checkCurrentSession);